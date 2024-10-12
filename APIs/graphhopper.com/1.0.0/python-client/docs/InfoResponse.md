# InfoResponse

Information about the server and the geographical area that it covers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bbox** | **str** | The bounding box of the geographical area covered by this GraphHopper instance. Format: &#x60;\&quot;minLon,minLat,maxLon,maxLat\&quot;  | [optional] 
**features** | **object** | The supported features, such as elevation, per vehicle profile.  | [optional] 
**version** | **str** | The version of the GraphHopper server that provided this response. This is not related to the API version.  | [optional] 

## Example

```python
from openapi_client.models.info_response import InfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InfoResponse from a JSON string
info_response_instance = InfoResponse.from_json(json)
# print the JSON string representation of the object
print(InfoResponse.to_json())

# convert the object into a dict
info_response_dict = info_response_instance.to_dict()
# create an instance of InfoResponse from a dict
info_response_from_dict = InfoResponse.from_dict(info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


