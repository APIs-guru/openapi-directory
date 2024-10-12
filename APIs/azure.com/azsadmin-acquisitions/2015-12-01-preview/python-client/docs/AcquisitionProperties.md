# AcquisitionProperties

The Properties of page BLOB acquisition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquisitionid** | **str** | The ID of page BLOB acquisition. | [optional] [readonly] 
**blob** | **str** | The name of the page BLOB. | [optional] [readonly] 
**container** | **str** | The container associated with the page BLOB. | [optional] [readonly] 
**file_path** | **str** | The file path of the page BLOB file on storage cluster. | [optional] [readonly] 
**maximumblobsize** | **int** | The maximum size of the page BLOB. | [optional] [readonly] 
**status** | [**AcquisitionStatus**](AcquisitionStatus.md) |  | [optional] 
**storageaccount** | **str** | The storage account that holds the page BLOB. | [optional] [readonly] 
**susbcriptionid** | **str** | ID of the subscription associated with the page BLOB. | [optional] [readonly] 

## Example

```python
from openapi_client.models.acquisition_properties import AcquisitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AcquisitionProperties from a JSON string
acquisition_properties_instance = AcquisitionProperties.from_json(json)
# print the JSON string representation of the object
print(AcquisitionProperties.to_json())

# convert the object into a dict
acquisition_properties_dict = acquisition_properties_instance.to_dict()
# create an instance of AcquisitionProperties from a dict
acquisition_properties_from_dict = AcquisitionProperties.from_dict(acquisition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


