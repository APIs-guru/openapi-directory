# HistogramQuery

Input Only. The histogram request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**histogram_query** | **str** | An expression specifies a histogram request against matching resources (for example, jobs) for searches. Expression syntax is a aggregation function call with histogram facets and other options. Available aggregation function calls are: * &#x60;count(string_histogram_facet)&#x60;: Count the number of matching entity, for each distinct attribute value. * &#x60;count(numeric_histogram_facet, list of buckets)&#x60;: Count the number of matching entity within each bucket. A maximum of 200 histogram buckets are supported. Data types: * Histogram facet: facet names with format a-zA-Z+. * String: string like \&quot;any string with backslash escape for quote(\\\&quot;).\&quot; * Number: whole number and floating point number like 10, -1 and -0.01. * List: list of elements with comma(,) separator surrounded by square brackets. For example, [1, 2, 3] and [\&quot;one\&quot;, \&quot;two\&quot;, \&quot;three\&quot;]. Built-in constants: * MIN (minimum number similar to java Double.MIN_VALUE) * MAX (maximum number similar to java Double.MAX_VALUE) Built-in functions: * bucket(start, end[, label]): bucket built-in function creates a bucket with range of start, end). Note that the end is exclusive. For example, bucket(1, MAX, \&quot;positive number\&quot;) or bucket(1, 10). Job histogram facets: * company_id: histogram by [Job.distributor_company_id. * company_display_name: histogram by Job.company_display_name. * employment_type: histogram by Job.employment_types. For example, \&quot;FULL_TIME\&quot;, \&quot;PART_TIME\&quot;. * company_size (DEPRECATED): histogram by CompanySize, for example, \&quot;SMALL\&quot;, \&quot;MEDIUM\&quot;, \&quot;BIG\&quot;. * publish_time_in_day: histogram by the Job.publish_time in days. Must specify list of numeric buckets in spec. * publish_time_in_month: histogram by the Job.publish_time in months. Must specify list of numeric buckets in spec. * publish_time_in_year: histogram by the Job.publish_time in years. Must specify list of numeric buckets in spec. * degree_type: histogram by the Job.degree_type. For example, \&quot;Bachelors\&quot;, \&quot;Masters\&quot;. * job_level: histogram by the Job.job_level. For example, \&quot;Entry Level\&quot;. * country: histogram by the country code of jobs. For example, \&quot;US\&quot;, \&quot;FR\&quot;. * admin1: histogram by the admin1 code of jobs, which is a global placeholder referring to the state, province, or the particular term a country uses to define the geographic structure below the country level. For example, \&quot;CA\&quot;, \&quot;IL\&quot;. * city: histogram by a combination of the \&quot;city name, admin1 code\&quot;. For example, \&quot;Mountain View, CA\&quot;, \&quot;New York, NY\&quot;. * admin1_country: histogram by a combination of the \&quot;admin1 code, country\&quot;. For example, \&quot;CA, US\&quot;, \&quot;IL, US\&quot;. * city_coordinate: histogram by the city center&#39;s GPS coordinates (latitude and longitude). For example, 37.4038522,-122.0987765. Since the coordinates of a city center can change, customers may need to refresh them periodically. * locale: histogram by the Job.language_code. For example, \&quot;en-US\&quot;, \&quot;fr-FR\&quot;. * language: histogram by the language subtag of the Job.language_code. For example, \&quot;en\&quot;, \&quot;fr\&quot;. * category: histogram by the JobCategory. For example, \&quot;COMPUTER_AND_IT\&quot;, \&quot;HEALTHCARE\&quot;. * base_compensation_unit: histogram by the CompensationUnit of base salary. For example, \&quot;WEEKLY\&quot;, \&quot;MONTHLY\&quot;. * base_compensation: histogram by the base salary. Must specify list of numeric buckets to group results by. * annualized_base_compensation: histogram by the base annualized salary. Must specify list of numeric buckets to group results by. * annualized_total_compensation: histogram by the total annualized salary. Must specify list of numeric buckets to group results by. * string_custom_attribute: histogram by string Job.custom_attributes. Values can be accessed via square bracket notations like string_custom_attribute[\&quot;key1\&quot;]. * numeric_custom_attribute: histogram by numeric Job.custom_attributes. Values can be accessed via square bracket notations like numeric_custom_attribute[\&quot;key1\&quot;]. Must specify list of numeric buckets to group results by. Example expressions: * count(admin1) * count(base_compensation, [bucket(1000, 10000), bucket(10000, 100000), bucket(100000, MAX)]) * count(string_custom_attribute[\&quot;some-string-custom-attribute\&quot;]) * count(numeric_custom_attribute[\&quot;some-numeric-custom-attribute\&quot;], [bucket(MIN, 0, \&quot;negative\&quot;), bucket(0, MAX, \&quot;non-negative\&quot;)]) | [optional] 

## Example

```python
from openapi_client.models.histogram_query import HistogramQuery

# TODO update the JSON string below
json = "{}"
# create an instance of HistogramQuery from a JSON string
histogram_query_instance = HistogramQuery.from_json(json)
# print the JSON string representation of the object
print(HistogramQuery.to_json())

# convert the object into a dict
histogram_query_dict = histogram_query_instance.to_dict()
# create an instance of HistogramQuery from a dict
histogram_query_from_dict = HistogramQuery.from_dict(histogram_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


