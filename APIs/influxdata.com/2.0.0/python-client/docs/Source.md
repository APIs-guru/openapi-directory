# Source


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **bool** |  | [optional] 
**default_rp** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**insecure_skip_verify** | **bool** |  | [optional] 
**languages** | **List[str]** |  | [optional] [readonly] 
**links** | [**SourceLinks**](SourceLinks.md) |  | [optional] 
**meta_url** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**org_id** | **str** |  | [optional] 
**password** | **str** |  | [optional] 
**shared_secret** | **str** |  | [optional] 
**telegraf** | **str** |  | [optional] 
**token** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.source import Source

# TODO update the JSON string below
json = "{}"
# create an instance of Source from a JSON string
source_instance = Source.from_json(json)
# print the JSON string representation of the object
print(Source.to_json())

# convert the object into a dict
source_dict = source_instance.to_dict()
# create an instance of Source from a dict
source_from_dict = Source.from_dict(source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


