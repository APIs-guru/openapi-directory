# Acquisition

The acquisition of the page BLOB.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AcquisitionProperties**](AcquisitionProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource Name. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] 

## Example

```python
from openapi_client.models.acquisition import Acquisition

# TODO update the JSON string below
json = "{}"
# create an instance of Acquisition from a JSON string
acquisition_instance = Acquisition.from_json(json)
# print the JSON string representation of the object
print(Acquisition.to_json())

# convert the object into a dict
acquisition_dict = acquisition_instance.to_dict()
# create an instance of Acquisition from a dict
acquisition_from_dict = Acquisition.from_dict(acquisition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


