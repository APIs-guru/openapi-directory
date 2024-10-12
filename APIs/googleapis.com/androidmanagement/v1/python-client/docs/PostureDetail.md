# PostureDetail

Additional details regarding the security posture of the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advice** | [**List[UserFacingMessage]**](UserFacingMessage.md) | Corresponding admin-facing advice to mitigate this security risk and improve the security posture of the device. | [optional] 
**security_risk** | **str** | A specific security risk that negatively affects the security posture of the device. | [optional] 

## Example

```python
from openapi_client.models.posture_detail import PostureDetail

# TODO update the JSON string below
json = "{}"
# create an instance of PostureDetail from a JSON string
posture_detail_instance = PostureDetail.from_json(json)
# print the JSON string representation of the object
print(PostureDetail.to_json())

# convert the object into a dict
posture_detail_dict = posture_detail_instance.to_dict()
# create an instance of PostureDetail from a dict
posture_detail_from_dict = PostureDetail.from_dict(posture_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


