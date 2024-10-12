# Trailer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episode** | **str** |  | [optional] 
**key** | **str** | Key for trailer, usually end part of uri for youtube links | [optional] 
**media_type** | **str** | Returns Media Type, either C (Channel) T (Television) or M (Movie) | [optional] 
**season** | **str** |  | [optional] 
**site** | **str** |  | [optional] 
**trailer_name** | **str** |  | [optional] 
**trailer_size** | **str** |  | [optional] 
**trailer_type** | **str** | Returns Trailer type (trailer, teaser, channel, episode,credits, clip etc) | [optional] 
**you_tube_embedded_code** | **str** |  | [optional] 
**you_tube_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.trailer import Trailer

# TODO update the JSON string below
json = "{}"
# create an instance of Trailer from a JSON string
trailer_instance = Trailer.from_json(json)
# print the JSON string representation of the object
print(Trailer.to_json())

# convert the object into a dict
trailer_dict = trailer_instance.to_dict()
# create an instance of Trailer from a dict
trailer_from_dict = Trailer.from_dict(trailer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


