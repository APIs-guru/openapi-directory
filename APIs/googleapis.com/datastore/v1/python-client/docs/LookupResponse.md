# LookupResponse

The response for Datastore.Lookup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deferred** | [**List[Key]**](Key.md) | A list of keys that were not looked up due to resource constraints. The order of results in this field is undefined and has no relation to the order of the keys in the input. | [optional] 
**found** | [**List[EntityResult]**](EntityResult.md) | Entities found as &#x60;ResultType.FULL&#x60; entities. The order of results in this field is undefined and has no relation to the order of the keys in the input. | [optional] 
**missing** | [**List[EntityResult]**](EntityResult.md) | Entities not found as &#x60;ResultType.KEY_ONLY&#x60; entities. The order of results in this field is undefined and has no relation to the order of the keys in the input. | [optional] 
**read_time** | **str** | The time at which these entities were read or found missing. | [optional] 
**transaction** | **bytearray** | The identifier of the transaction that was started as part of this Lookup request. Set only when ReadOptions.new_transaction was set in LookupRequest.read_options. | [optional] 

## Example

```python
from openapi_client.models.lookup_response import LookupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LookupResponse from a JSON string
lookup_response_instance = LookupResponse.from_json(json)
# print the JSON string representation of the object
print(LookupResponse.to_json())

# convert the object into a dict
lookup_response_dict = lookup_response_instance.to_dict()
# create an instance of LookupResponse from a dict
lookup_response_from_dict = LookupResponse.from_dict(lookup_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


