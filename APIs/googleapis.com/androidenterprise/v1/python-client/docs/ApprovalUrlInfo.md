# ApprovalUrlInfo

Information on an approval URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_url** | **str** | A URL that displays a product&#39;s permissions and that can also be used to approve the product with the Products.approve call. | [optional] 

## Example

```python
from openapi_client.models.approval_url_info import ApprovalUrlInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ApprovalUrlInfo from a JSON string
approval_url_info_instance = ApprovalUrlInfo.from_json(json)
# print the JSON string representation of the object
print(ApprovalUrlInfo.to_json())

# convert the object into a dict
approval_url_info_dict = approval_url_info_instance.to_dict()
# create an instance of ApprovalUrlInfo from a dict
approval_url_info_from_dict = ApprovalUrlInfo.from_dict(approval_url_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


