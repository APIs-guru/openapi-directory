# LinkService


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **str** | Service provided to or by the linked account. Acceptable values are: - \&quot;&#x60;shoppingActionsOrderManagement&#x60;\&quot; - \&quot;&#x60;shoppingActionsProductManagement&#x60;\&quot; - \&quot;&#x60;shoppingAdsProductManagement&#x60;\&quot; - \&quot;&#x60;paymentProcessing&#x60;\&quot;  | [optional] 
**status** | **str** | Status of the link Acceptable values are: - \&quot;&#x60;active&#x60;\&quot; - \&quot;&#x60;inactive&#x60;\&quot; - \&quot;&#x60;pending&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.link_service import LinkService

# TODO update the JSON string below
json = "{}"
# create an instance of LinkService from a JSON string
link_service_instance = LinkService.from_json(json)
# print the JSON string representation of the object
print(LinkService.to_json())

# convert the object into a dict
link_service_dict = link_service_instance.to_dict()
# create an instance of LinkService from a dict
link_service_from_dict = LinkService.from_dict(link_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


