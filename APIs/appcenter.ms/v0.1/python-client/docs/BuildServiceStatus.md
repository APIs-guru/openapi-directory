# BuildServiceStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**os** | **str** |  | [optional] 
**service** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**valid_until** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.build_service_status import BuildServiceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BuildServiceStatus from a JSON string
build_service_status_instance = BuildServiceStatus.from_json(json)
# print the JSON string representation of the object
print(BuildServiceStatus.to_json())

# convert the object into a dict
build_service_status_dict = build_service_status_instance.to_dict()
# create an instance of BuildServiceStatus from a dict
build_service_status_from_dict = BuildServiceStatus.from_dict(build_service_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


