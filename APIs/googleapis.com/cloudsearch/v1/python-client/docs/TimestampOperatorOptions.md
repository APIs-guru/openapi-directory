# TimestampOperatorOptions

Used to provide a search operator for timestamp properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**greater_than_operator_name** | **str** | Indicates the operator name required in the query in order to isolate the timestamp property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property&#39;s name is *closeDate*, then queries like *closedafter:&lt;value&gt;* show results only where the value of the property named *closeDate* is later than *&lt;value&gt;*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. | [optional] 
**less_than_operator_name** | **str** | Indicates the operator name required in the query in order to isolate the timestamp property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property&#39;s name is *closeDate*, then queries like *closedbefore:&lt;value&gt;* show results only where the value of the property named *closeDate* is earlier than *&lt;value&gt;*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. | [optional] 
**operator_name** | **str** | Indicates the operator name required in the query in order to isolate the timestamp property. For example, if operatorName is *closedon* and the property&#39;s name is *closeDate*, then queries like *closedon:&lt;value&gt;* show results only where the value of the property named *closeDate* matches *&lt;value&gt;*. By contrast, a search that uses the same *&lt;value&gt;* without an operator returns all items where *&lt;value&gt;* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. | [optional] 

## Example

```python
from openapi_client.models.timestamp_operator_options import TimestampOperatorOptions

# TODO update the JSON string below
json = "{}"
# create an instance of TimestampOperatorOptions from a JSON string
timestamp_operator_options_instance = TimestampOperatorOptions.from_json(json)
# print the JSON string representation of the object
print(TimestampOperatorOptions.to_json())

# convert the object into a dict
timestamp_operator_options_dict = timestamp_operator_options_instance.to_dict()
# create an instance of TimestampOperatorOptions from a dict
timestamp_operator_options_from_dict = TimestampOperatorOptions.from_dict(timestamp_operator_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


