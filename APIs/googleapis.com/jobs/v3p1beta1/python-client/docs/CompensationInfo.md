# CompensationInfo

Job compensation details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annualized_base_compensation_range** | [**CompensationRange**](CompensationRange.md) |  | [optional] 
**annualized_total_compensation_range** | [**CompensationRange**](CompensationRange.md) |  | [optional] 
**entries** | [**List[CompensationEntry]**](CompensationEntry.md) | Optional. Job compensation information. At most one entry can be of type CompensationInfo.CompensationType.BASE, which is referred as ** base compensation entry ** for the job. | [optional] 

## Example

```python
from openapi_client.models.compensation_info import CompensationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CompensationInfo from a JSON string
compensation_info_instance = CompensationInfo.from_json(json)
# print the JSON string representation of the object
print(CompensationInfo.to_json())

# convert the object into a dict
compensation_info_dict = compensation_info_instance.to_dict()
# create an instance of CompensationInfo from a dict
compensation_info_from_dict = CompensationInfo.from_dict(compensation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


