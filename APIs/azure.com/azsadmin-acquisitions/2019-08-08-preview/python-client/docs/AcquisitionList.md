# AcquisitionList

The list of page BLOB acquisitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Acquisition]**](Acquisition.md) | List of acquisitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.acquisition_list import AcquisitionList

# TODO update the JSON string below
json = "{}"
# create an instance of AcquisitionList from a JSON string
acquisition_list_instance = AcquisitionList.from_json(json)
# print the JSON string representation of the object
print(AcquisitionList.to_json())

# convert the object into a dict
acquisition_list_dict = acquisition_list_instance.to_dict()
# create an instance of AcquisitionList from a dict
acquisition_list_from_dict = AcquisitionList.from_dict(acquisition_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


