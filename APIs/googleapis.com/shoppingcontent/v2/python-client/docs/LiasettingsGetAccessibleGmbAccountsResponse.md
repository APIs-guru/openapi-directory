# LiasettingsGetAccessibleGmbAccountsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The ID of the Merchant Center account. | [optional] 
**gmb_accounts** | [**List[GmbAccountsGmbAccount]**](GmbAccountsGmbAccount.md) | A list of GMB accounts which are available to the merchant. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#liasettingsGetAccessibleGmbAccountsResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.liasettings_get_accessible_gmb_accounts_response import LiasettingsGetAccessibleGmbAccountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LiasettingsGetAccessibleGmbAccountsResponse from a JSON string
liasettings_get_accessible_gmb_accounts_response_instance = LiasettingsGetAccessibleGmbAccountsResponse.from_json(json)
# print the JSON string representation of the object
print(LiasettingsGetAccessibleGmbAccountsResponse.to_json())

# convert the object into a dict
liasettings_get_accessible_gmb_accounts_response_dict = liasettings_get_accessible_gmb_accounts_response_instance.to_dict()
# create an instance of LiasettingsGetAccessibleGmbAccountsResponse from a dict
liasettings_get_accessible_gmb_accounts_response_from_dict = LiasettingsGetAccessibleGmbAccountsResponse.from_dict(liasettings_get_accessible_gmb_accounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


