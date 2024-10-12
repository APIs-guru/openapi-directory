# A2AUnprotectedDiskDetails

A2A unprotected disk details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_lun_id** | **int** | The source lun Id for the data disk. | [optional] 

## Example

```python
from openapi_client.models.a2_a_unprotected_disk_details import A2AUnprotectedDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of A2AUnprotectedDiskDetails from a JSON string
a2_a_unprotected_disk_details_instance = A2AUnprotectedDiskDetails.from_json(json)
# print the JSON string representation of the object
print(A2AUnprotectedDiskDetails.to_json())

# convert the object into a dict
a2_a_unprotected_disk_details_dict = a2_a_unprotected_disk_details_instance.to_dict()
# create an instance of A2AUnprotectedDiskDetails from a dict
a2_a_unprotected_disk_details_from_dict = A2AUnprotectedDiskDetails.from_dict(a2_a_unprotected_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


