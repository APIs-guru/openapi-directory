# AwsDiskDetails

The details of an AWS instance disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_number** | **int** | The ordinal number of the disk. | [optional] 
**size_gb** | **str** | Size in GB. | [optional] 
**volume_id** | **str** | AWS volume ID. | [optional] 

## Example

```python
from openapi_client.models.aws_disk_details import AwsDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AwsDiskDetails from a JSON string
aws_disk_details_instance = AwsDiskDetails.from_json(json)
# print the JSON string representation of the object
print(AwsDiskDetails.to_json())

# convert the object into a dict
aws_disk_details_dict = aws_disk_details_instance.to_dict()
# create an instance of AwsDiskDetails from a dict
aws_disk_details_from_dict = AwsDiskDetails.from_dict(aws_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


