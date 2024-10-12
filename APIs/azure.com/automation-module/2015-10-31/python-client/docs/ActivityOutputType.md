# ActivityOutputType

Definition of the activity output type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the activity output type. | [optional] 
**type** | **str** | Gets or sets the type of the activity output type. | [optional] 

## Example

```python
from openapi_client.models.activity_output_type import ActivityOutputType

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityOutputType from a JSON string
activity_output_type_instance = ActivityOutputType.from_json(json)
# print the JSON string representation of the object
print(ActivityOutputType.to_json())

# convert the object into a dict
activity_output_type_dict = activity_output_type_instance.to_dict()
# create an instance of ActivityOutputType from a dict
activity_output_type_from_dict = ActivityOutputType.from_dict(activity_output_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


