# CustomAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute. Underscores will be replaced by spaces upon insertion. | [optional] 
**type** | **str** | The type of the attribute. Acceptable values are: - \&quot;&#x60;boolean&#x60;\&quot; - \&quot;&#x60;datetimerange&#x60;\&quot; - \&quot;&#x60;float&#x60;\&quot; - \&quot;&#x60;group&#x60;\&quot; - \&quot;&#x60;int&#x60;\&quot; - \&quot;&#x60;price&#x60;\&quot; - \&quot;&#x60;text&#x60;\&quot; - \&quot;&#x60;time&#x60;\&quot; - \&quot;&#x60;url&#x60;\&quot;  | [optional] 
**unit** | **str** | Free-form unit of the attribute. Unit can only be used for values of type int, float, or price. | [optional] 
**value** | **str** | The value of the attribute. | [optional] 

## Example

```python
from openapi_client.models.custom_attribute import CustomAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of CustomAttribute from a JSON string
custom_attribute_instance = CustomAttribute.from_json(json)
# print the JSON string representation of the object
print(CustomAttribute.to_json())

# convert the object into a dict
custom_attribute_dict = custom_attribute_instance.to_dict()
# create an instance of CustomAttribute from a dict
custom_attribute_from_dict = CustomAttribute.from_dict(custom_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


