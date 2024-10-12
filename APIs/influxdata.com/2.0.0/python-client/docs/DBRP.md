# DBRP


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_id** | **str** | the bucket ID used as target for the translation. | [optional] 
**database** | **str** | InfluxDB v1 database | [optional] 
**default** | **bool** | Specify if this mapping represents the default retention policy for the database specificed. | [optional] 
**id** | **str** | the mapping identifier | [optional] [readonly] 
**links** | [**Links**](Links.md) |  | [optional] 
**org** | **str** | the organization that owns this mapping. | [optional] 
**org_id** | **str** | the organization ID that owns this mapping. | [optional] 
**retention_policy** | **str** | InfluxDB v1 retention policy | [optional] 

## Example

```python
from openapi_client.models.dbrp import DBRP

# TODO update the JSON string below
json = "{}"
# create an instance of DBRP from a JSON string
dbrp_instance = DBRP.from_json(json)
# print the JSON string representation of the object
print(DBRP.to_json())

# convert the object into a dict
dbrp_dict = dbrp_instance.to_dict()
# create an instance of DBRP from a dict
dbrp_from_dict = DBRP.from_dict(dbrp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


