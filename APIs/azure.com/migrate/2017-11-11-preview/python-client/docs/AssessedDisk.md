# AssessedDisk

A disk assessed for an assessment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gigabytes_consumed** | **float** | Gigabytes of storage consumed by this disk. | [optional] [readonly] 
**gigabytes_for_recommended_disk_size** | **int** | Gigabytes of storage provided by the recommended Azure disk size. | [optional] [readonly] 
**gigabytes_provisioned** | **float** | Gigabytes of storage provisioned for this disk. | [optional] [readonly] 
**megabytes_per_second_of_read** | **float** | Disk throughput in MegaBytes per second. | [optional] [readonly] 
**megabytes_per_second_of_write** | **float** | Disk throughput in MegaBytes per second. | [optional] [readonly] 
**monthly_storage_cost** | **float** | Estimated aggregate storage cost for a 31-day month for this disk. | [optional] [readonly] 
**name** | **str** | Name of the assessed disk. | [optional] [readonly] 
**number_of_read_operations_per_second** | **float** | Number of read operations per second for the disk. | [optional] [readonly] 
**number_of_write_operations_per_second** | **float** | Number of read and write operations per second for the disk. | [optional] [readonly] 
**recommended_disk_size** | **str** | Recommended Azure size for the disk, given utilization data and preferences set on Assessment. | [optional] [readonly] 
**recommended_disk_type** | **str** | Storage type selected for this disk. | [optional] [readonly] 
**suitability** | **str** | Whether this disk is suitable for Azure. | [optional] [readonly] 
**suitability_explanation** | **str** | If disk is suitable, this explains the reasons and mitigation steps. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assessed_disk import AssessedDisk

# TODO update the JSON string below
json = "{}"
# create an instance of AssessedDisk from a JSON string
assessed_disk_instance = AssessedDisk.from_json(json)
# print the JSON string representation of the object
print(AssessedDisk.to_json())

# convert the object into a dict
assessed_disk_dict = assessed_disk_instance.to_dict()
# create an instance of AssessedDisk from a dict
assessed_disk_from_dict = AssessedDisk.from_dict(assessed_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


