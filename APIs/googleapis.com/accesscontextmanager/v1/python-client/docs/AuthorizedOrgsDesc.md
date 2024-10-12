# AuthorizedOrgsDesc

`AuthorizedOrgsDesc` contains data for an organization's authorization policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_type** | **str** | The asset type of this authorized orgs desc. Valid values are &#x60;ASSET_TYPE_DEVICE&#x60;, and &#x60;ASSET_TYPE_CREDENTIAL_STRENGTH&#x60;. | [optional] 
**authorization_direction** | **str** | The direction of the authorization relationship between this organization and the organizations listed in the &#x60;orgs&#x60; field. The valid values for this field include the following: &#x60;AUTHORIZATION_DIRECTION_FROM&#x60;: Allows this organization to evaluate traffic in the organizations listed in the &#x60;orgs&#x60; field. &#x60;AUTHORIZATION_DIRECTION_TO&#x60;: Allows the organizations listed in the &#x60;orgs&#x60; field to evaluate the traffic in this organization. For the authorization relationship to take effect, all of the organizations must authorize and specify the appropriate relationship direction. For example, if organization A authorized organization B and C to evaluate its traffic, by specifying &#x60;AUTHORIZATION_DIRECTION_TO&#x60; as the authorization direction, organizations B and C must specify &#x60;AUTHORIZATION_DIRECTION_FROM&#x60; as the authorization direction in their &#x60;AuthorizedOrgsDesc&#x60; resource. | [optional] 
**authorization_type** | **str** | A granular control type for authorization levels. Valid value is &#x60;AUTHORIZATION_TYPE_TRUST&#x60;. | [optional] 
**name** | **str** | Resource name for the &#x60;AuthorizedOrgsDesc&#x60;. Format: &#x60;accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}&#x60;. The &#x60;authorized_orgs_desc&#x60; component must begin with a letter, followed by alphanumeric characters or &#x60;_&#x60;. After you create an &#x60;AuthorizedOrgsDesc&#x60;, you cannot change its &#x60;name&#x60;. | [optional] 
**orgs** | **List[str]** | The list of organization ids in this AuthorizedOrgsDesc. Format: &#x60;organizations/&#x60; Example: &#x60;organizations/123456&#x60; | [optional] 

## Example

```python
from openapi_client.models.authorized_orgs_desc import AuthorizedOrgsDesc

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizedOrgsDesc from a JSON string
authorized_orgs_desc_instance = AuthorizedOrgsDesc.from_json(json)
# print the JSON string representation of the object
print(AuthorizedOrgsDesc.to_json())

# convert the object into a dict
authorized_orgs_desc_dict = authorized_orgs_desc_instance.to_dict()
# create an instance of AuthorizedOrgsDesc from a dict
authorized_orgs_desc_from_dict = AuthorizedOrgsDesc.from_dict(authorized_orgs_desc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


