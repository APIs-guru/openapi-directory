# MABContainerHealthDetails

MAB workload-specific Health Details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | Health Code | [optional] 
**message** | **str** | Health Message | [optional] 
**recommendations** | **List[str]** | Health Recommended Actions | [optional] 
**title** | **str** | Health Title | [optional] 

## Example

```python
from openapi_client.models.mab_container_health_details import MABContainerHealthDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MABContainerHealthDetails from a JSON string
mab_container_health_details_instance = MABContainerHealthDetails.from_json(json)
# print the JSON string representation of the object
print(MABContainerHealthDetails.to_json())

# convert the object into a dict
mab_container_health_details_dict = mab_container_health_details_instance.to_dict()
# create an instance of MABContainerHealthDetails from a dict
mab_container_health_details_from_dict = MABContainerHealthDetails.from_dict(mab_container_health_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


