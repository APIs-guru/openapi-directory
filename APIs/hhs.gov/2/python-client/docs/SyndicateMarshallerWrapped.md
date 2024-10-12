# SyndicateMarshallerWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[SyndicateMarshaller]**](SyndicateMarshaller.md) |  | [optional] 

## Example

```python
from openapi_client.models.syndicate_marshaller_wrapped import SyndicateMarshallerWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of SyndicateMarshallerWrapped from a JSON string
syndicate_marshaller_wrapped_instance = SyndicateMarshallerWrapped.from_json(json)
# print the JSON string representation of the object
print(SyndicateMarshallerWrapped.to_json())

# convert the object into a dict
syndicate_marshaller_wrapped_dict = syndicate_marshaller_wrapped_instance.to_dict()
# create an instance of SyndicateMarshallerWrapped from a dict
syndicate_marshaller_wrapped_from_dict = SyndicateMarshallerWrapped.from_dict(syndicate_marshaller_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


