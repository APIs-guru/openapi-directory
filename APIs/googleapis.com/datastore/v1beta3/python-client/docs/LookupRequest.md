# LookupRequest

The request for Datastore.Lookup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**List[Key]**](Key.md) | Required. Keys of entities to look up. | [optional] 
**read_options** | [**ReadOptions**](ReadOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.lookup_request import LookupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LookupRequest from a JSON string
lookup_request_instance = LookupRequest.from_json(json)
# print the JSON string representation of the object
print(LookupRequest.to_json())

# convert the object into a dict
lookup_request_dict = lookup_request_instance.to_dict()
# create an instance of LookupRequest from a dict
lookup_request_from_dict = LookupRequest.from_dict(lookup_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


