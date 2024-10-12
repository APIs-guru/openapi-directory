# Telegraf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**metadata** | [**TelegrafRequestMetadata**](TelegrafRequestMetadata.md) |  | [optional] 
**name** | **str** |  | [optional] 
**org_id** | **str** |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**labels** | [**List[Label]**](Label.md) |  | [optional] 
**links** | [**TelegrafAllOfLinks**](TelegrafAllOfLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.telegraf import Telegraf

# TODO update the JSON string below
json = "{}"
# create an instance of Telegraf from a JSON string
telegraf_instance = Telegraf.from_json(json)
# print the JSON string representation of the object
print(Telegraf.to_json())

# convert the object into a dict
telegraf_dict = telegraf_instance.to_dict()
# create an instance of Telegraf from a dict
telegraf_from_dict = Telegraf.from_dict(telegraf_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


