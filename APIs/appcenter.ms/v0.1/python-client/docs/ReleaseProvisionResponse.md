# ReleaseProvisionResponse

Response for provisioning a release

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_url** | **str** | The url to check provisioning status. | [optional] 

## Example

```python
from openapi_client.models.release_provision_response import ReleaseProvisionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseProvisionResponse from a JSON string
release_provision_response_instance = ReleaseProvisionResponse.from_json(json)
# print the JSON string representation of the object
print(ReleaseProvisionResponse.to_json())

# convert the object into a dict
release_provision_response_dict = release_provision_response_instance.to_dict()
# create an instance of ReleaseProvisionResponse from a dict
release_provision_response_from_dict = ReleaseProvisionResponse.from_dict(release_provision_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


