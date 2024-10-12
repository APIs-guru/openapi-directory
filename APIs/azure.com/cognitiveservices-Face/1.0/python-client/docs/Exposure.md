# Exposure

Properties describing exposure level of the image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exposure_level** | **str** | An enum value indicating level of exposure. | [optional] 
**value** | **float** | A number ranging from 0 to 1 indicating the intensity level associated with a property. | [optional] 

## Example

```python
from openapi_client.models.exposure import Exposure

# TODO update the JSON string below
json = "{}"
# create an instance of Exposure from a JSON string
exposure_instance = Exposure.from_json(json)
# print the JSON string representation of the object
print(Exposure.to_json())

# convert the object into a dict
exposure_dict = exposure_instance.to_dict()
# create an instance of Exposure from a dict
exposure_from_dict = Exposure.from_dict(exposure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


