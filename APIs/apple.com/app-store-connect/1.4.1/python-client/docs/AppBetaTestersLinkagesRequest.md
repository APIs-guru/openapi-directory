# AppBetaTestersLinkagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppBetaTestersLinkagesRequestDataInner]**](AppBetaTestersLinkagesRequestDataInner.md) |  | 

## Example

```python
from openapi_client.models.app_beta_testers_linkages_request import AppBetaTestersLinkagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppBetaTestersLinkagesRequest from a JSON string
app_beta_testers_linkages_request_instance = AppBetaTestersLinkagesRequest.from_json(json)
# print the JSON string representation of the object
print(AppBetaTestersLinkagesRequest.to_json())

# convert the object into a dict
app_beta_testers_linkages_request_dict = app_beta_testers_linkages_request_instance.to_dict()
# create an instance of AppBetaTestersLinkagesRequest from a dict
app_beta_testers_linkages_request_from_dict = AppBetaTestersLinkagesRequest.from_dict(app_beta_testers_linkages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


