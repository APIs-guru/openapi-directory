# TelegrafAllOfLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **str** | URI of resource. | [optional] [readonly] 
**members** | **str** | URI of resource. | [optional] [readonly] 
**owners** | **str** | URI of resource. | [optional] [readonly] 
**var_self** | **str** | URI of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.telegraf_all_of_links import TelegrafAllOfLinks

# TODO update the JSON string below
json = "{}"
# create an instance of TelegrafAllOfLinks from a JSON string
telegraf_all_of_links_instance = TelegrafAllOfLinks.from_json(json)
# print the JSON string representation of the object
print(TelegrafAllOfLinks.to_json())

# convert the object into a dict
telegraf_all_of_links_dict = telegraf_all_of_links_instance.to_dict()
# create an instance of TelegrafAllOfLinks from a dict
telegraf_all_of_links_from_dict = TelegrafAllOfLinks.from_dict(telegraf_all_of_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


