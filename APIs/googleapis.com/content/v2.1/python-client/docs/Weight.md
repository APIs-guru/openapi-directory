# Weight


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | Required. The weight unit. Acceptable values are: - \&quot;&#x60;kg&#x60;\&quot; - \&quot;&#x60;lb&#x60;\&quot;  | [optional] 
**value** | **str** | Required. The weight represented as a number. The weight can have a maximum precision of four decimal places. | [optional] 

## Example

```python
from openapi_client.models.weight import Weight

# TODO update the JSON string below
json = "{}"
# create an instance of Weight from a JSON string
weight_instance = Weight.from_json(json)
# print the JSON string representation of the object
print(Weight.to_json())

# convert the object into a dict
weight_dict = weight_instance.to_dict()
# create an instance of Weight from a dict
weight_from_dict = Weight.from_dict(weight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


