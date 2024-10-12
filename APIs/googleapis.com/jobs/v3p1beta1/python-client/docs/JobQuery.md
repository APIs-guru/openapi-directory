# JobQuery

Input only. The query required to perform a search query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commute_filter** | [**CommuteFilter**](CommuteFilter.md) |  | [optional] 
**company_display_names** | **List[str]** | Optional. This filter specifies the company Company.display_name of the jobs to search against. The company name must match the value exactly. Alternatively, the value being searched for can be wrapped in different match operators. &#x60;SUBSTRING_MATCH([value])&#x60; The company name must contain a case insensitive substring match of the value. Using this function may increase latency. Sample Value: &#x60;SUBSTRING_MATCH(google)&#x60; &#x60;MULTI_WORD_TOKEN_MATCH([value])&#x60; The value will be treated as a multi word token and the company name must contain a case insensitive match of the value. Using this function may increase latency. Sample Value: &#x60;MULTI_WORD_TOKEN_MATCH(google)&#x60; If a value isn&#39;t specified, jobs within the search results are associated with any company. If multiple values are specified, jobs within the search results may be associated with any of the specified companies. At most 20 company display name filters are allowed. | [optional] 
**company_names** | **List[str]** | Optional. This filter specifies the company entities to search against. If a value isn&#39;t specified, jobs are searched for against all companies. If multiple values are specified, jobs are searched against the companies specified. The format is \&quot;projects/{project_id}/companies/{company_id}\&quot;, for example, \&quot;projects/api-test-project/companies/foo\&quot;. At most 20 company filters are allowed. | [optional] 
**compensation_filter** | [**CompensationFilter**](CompensationFilter.md) |  | [optional] 
**custom_attribute_filter** | **str** | Optional. This filter specifies a structured syntax to match against the Job.custom_attributes marked as &#x60;filterable&#x60;. The syntax for this expression is a subset of SQL syntax. Supported operators are: &#x60;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&lt;&#x60;, &#x60;&lt;&#x3D;&#x60;, &#x60;&gt;&#x60;, and &#x60;&gt;&#x3D;&#x60; where the left of the operator is a custom field key and the right of the operator is a number or a quoted string. You must escape backslash (\\\\) and quote (\\\&quot;) characters. Supported functions are &#x60;LOWER([field_name])&#x60; to perform a case insensitive match and &#x60;EMPTY([field_name])&#x60; to filter on the existence of a key. Boolean expressions (AND/OR/NOT) are supported up to 3 levels of nesting (for example, \&quot;((A AND B AND C) OR NOT D) AND E\&quot;), a maximum of 100 comparisons or functions are allowed in the expression. The expression must be &lt; 10000 bytes in length. Sample Query: &#x60;(LOWER(driving_license)&#x3D;\&quot;class \\\&quot;a\\\&quot;\&quot; OR EMPTY(driving_license)) AND driving_years &gt; 10&#x60; | [optional] 
**disable_spell_check** | **bool** | Optional. This flag controls the spell-check feature. If false, the service attempts to correct a misspelled query, for example, \&quot;enginee\&quot; is corrected to \&quot;engineer\&quot;. Defaults to false: a spell check is performed. | [optional] 
**employment_types** | **List[str]** | Optional. The employment type filter specifies the employment type of jobs to search against, such as EmploymentType.FULL_TIME. If a value is not specified, jobs in the search results includes any employment type. If multiple values are specified, jobs in the search results include any of the specified employment types. | [optional] 
**excluded_jobs** | **List[str]** | Optional. This filter specifies a list of job names to be excluded during search. At most 400 excluded job names are allowed. | [optional] 
**job_categories** | **List[str]** | Optional. The category filter specifies the categories of jobs to search against. See Category for more information. If a value is not specified, jobs from any category are searched against. If multiple values are specified, jobs from any of the specified categories are searched against. | [optional] 
**language_codes** | **List[str]** | Optional. This filter specifies the locale of jobs to search against, for example, \&quot;en-US\&quot;. If a value isn&#39;t specified, the search results can contain jobs in any locale. Language codes should be in BCP-47 format, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). At most 10 language code filters are allowed. | [optional] 
**location_filters** | [**List[LocationFilter]**](LocationFilter.md) | Optional. The location filter specifies geo-regions containing the jobs to search against. See LocationFilter for more information. If a location value isn&#39;t specified, jobs fitting the other search criteria are retrieved regardless of where they&#39;re located. If multiple values are specified, jobs are retrieved from any of the specified locations. If different values are specified for the LocationFilter.distance_in_miles parameter, the maximum provided distance is used for all locations. At most 5 location filters are allowed. | [optional] 
**publish_time_range** | [**TimestampRange**](TimestampRange.md) |  | [optional] 
**query** | **str** | Optional. The query string that matches against the job title, description, and location fields. The maximum number of allowed characters is 255. | [optional] 
**query_language_code** | **str** | The language code of query. For example, \&quot;en-US\&quot;. This field helps to better interpret the query. If a value isn&#39;t specified, the query language code is automatically detected, which may not be accurate. Language code should be in BCP-47 format, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). | [optional] 

## Example

```python
from openapi_client.models.job_query import JobQuery

# TODO update the JSON string below
json = "{}"
# create an instance of JobQuery from a JSON string
job_query_instance = JobQuery.from_json(json)
# print the JSON string representation of the object
print(JobQuery.to_json())

# convert the object into a dict
job_query_dict = job_query_instance.to_dict()
# create an instance of JobQuery from a dict
job_query_from_dict = JobQuery.from_dict(job_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


