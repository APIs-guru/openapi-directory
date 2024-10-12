# Root200ResponseLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**holidays** | [**Root200ResponseLinksHolidays**](Root200ResponseLinksHolidays.md) |  | [optional] 
**provinces** | [**Root200ResponseLinksProvinces**](Root200ResponseLinksProvinces.md) |  | [optional] 
**var_self** | [**Root200ResponseLinksSelf**](Root200ResponseLinksSelf.md) |  | [optional] 
**spec** | [**Root200ResponseLinksSpec**](Root200ResponseLinksSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.root200_response_links import Root200ResponseLinks

# TODO update the JSON string below
json = "{}"
# create an instance of Root200ResponseLinks from a JSON string
root200_response_links_instance = Root200ResponseLinks.from_json(json)
# print the JSON string representation of the object
print(Root200ResponseLinks.to_json())

# convert the object into a dict
root200_response_links_dict = root200_response_links_instance.to_dict()
# create an instance of Root200ResponseLinks from a dict
root200_response_links_from_dict = Root200ResponseLinks.from_dict(root200_response_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


