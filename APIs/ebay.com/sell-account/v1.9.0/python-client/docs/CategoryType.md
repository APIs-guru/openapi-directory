# CategoryType

The category type discerns whether the policy applies to motor vehicle listings, or to any other items except motor vehicle listings. <br/><br/>Each business policy can be associated with either or both categories ('MOTORS_VEHICLES' and 'ALL_EXCLUDING_MOTORS_VEHICLES'); however, return business policies are not applicable for motor vehicle listings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **bool** | &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This field has been deprecated and is no longer used.&lt;ul&gt;&lt;li&gt;Do not include this field in any &lt;b&gt;create&lt;/b&gt; or &lt;b&gt;update&lt;/b&gt; method.&lt;/li&gt;&lt;li&gt;This field may be returned within the payload of a &lt;b&gt;get&lt;/b&gt; method, but it can be ignored.&lt;/li&gt;&lt;/ul&gt;&lt;/span&gt; | [optional] 
**name** | **str** | The category type to which the policy applies (motor vehicles or non-motor vehicles). &lt;br /&gt;&lt;br /&gt;The &lt;code&gt;MOTORS_VEHICLES&lt;/code&gt; category type is not valid for return policies. eBay flows do not support the return of motor vehicles. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:CategoryTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.category_type import CategoryType

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryType from a JSON string
category_type_instance = CategoryType.from_json(json)
# print the JSON string representation of the object
print(CategoryType.to_json())

# convert the object into a dict
category_type_dict = category_type_instance.to_dict()
# create an instance of CategoryType from a dict
category_type_from_dict = CategoryType.from_dict(category_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


