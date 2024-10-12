# AppPkgSubscriptionLinkList

'The data type represents a subscription link list of notification on application package management'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**AppPkgSubscriptionLinkListLinks**](AppPkgSubscriptionLinkListLinks.md) |  | 

## Example

```python
from openapi_client.models.app_pkg_subscription_link_list import AppPkgSubscriptionLinkList

# TODO update the JSON string below
json = "{}"
# create an instance of AppPkgSubscriptionLinkList from a JSON string
app_pkg_subscription_link_list_instance = AppPkgSubscriptionLinkList.from_json(json)
# print the JSON string representation of the object
print(AppPkgSubscriptionLinkList.to_json())

# convert the object into a dict
app_pkg_subscription_link_list_dict = app_pkg_subscription_link_list_instance.to_dict()
# create an instance of AppPkgSubscriptionLinkList from a dict
app_pkg_subscription_link_list_from_dict = AppPkgSubscriptionLinkList.from_dict(app_pkg_subscription_link_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


