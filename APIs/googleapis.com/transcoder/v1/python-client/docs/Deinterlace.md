# Deinterlace

Deinterlace configuration for input video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bwdif** | [**BwdifConfig**](BwdifConfig.md) |  | [optional] 
**yadif** | [**YadifConfig**](YadifConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.deinterlace import Deinterlace

# TODO update the JSON string below
json = "{}"
# create an instance of Deinterlace from a JSON string
deinterlace_instance = Deinterlace.from_json(json)
# print the JSON string representation of the object
print(Deinterlace.to_json())

# convert the object into a dict
deinterlace_dict = deinterlace_instance.to_dict()
# create an instance of Deinterlace from a dict
deinterlace_from_dict = Deinterlace.from_dict(deinterlace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


