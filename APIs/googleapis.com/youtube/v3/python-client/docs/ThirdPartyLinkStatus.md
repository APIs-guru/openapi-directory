# ThirdPartyLinkStatus

The third-party link status object contains information about the status of the link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link_status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.third_party_link_status import ThirdPartyLinkStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyLinkStatus from a JSON string
third_party_link_status_instance = ThirdPartyLinkStatus.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyLinkStatus.to_json())

# convert the object into a dict
third_party_link_status_dict = third_party_link_status_instance.to_dict()
# create an instance of ThirdPartyLinkStatus from a dict
third_party_link_status_from_dict = ThirdPartyLinkStatus.from_dict(third_party_link_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


