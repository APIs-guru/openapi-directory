# Drive

Representation of a drive resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DriveModel**](DriveModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.drive import Drive

# TODO update the JSON string below
json = "{}"
# create an instance of Drive from a JSON string
drive_instance = Drive.from_json(json)
# print the JSON string representation of the object
print(Drive.to_json())

# convert the object into a dict
drive_dict = drive_instance.to_dict()
# create an instance of Drive from a dict
drive_from_dict = Drive.from_dict(drive_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


