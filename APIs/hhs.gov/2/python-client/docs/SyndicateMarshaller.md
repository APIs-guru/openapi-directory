# SyndicateMarshaller


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**media_type** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**source_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.syndicate_marshaller import SyndicateMarshaller

# TODO update the JSON string below
json = "{}"
# create an instance of SyndicateMarshaller from a JSON string
syndicate_marshaller_instance = SyndicateMarshaller.from_json(json)
# print the JSON string representation of the object
print(SyndicateMarshaller.to_json())

# convert the object into a dict
syndicate_marshaller_dict = syndicate_marshaller_instance.to_dict()
# create an instance of SyndicateMarshaller from a dict
syndicate_marshaller_from_dict = SyndicateMarshaller.from_dict(syndicate_marshaller_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


