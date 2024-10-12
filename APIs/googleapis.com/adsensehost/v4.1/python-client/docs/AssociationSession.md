# AssociationSession


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Hosted account id of the associated publisher after association. Present if status is ACCEPTED. | [optional] 
**id** | **str** | Unique identifier of this association session. | [optional] 
**kind** | **str** | Kind of resource this is, in this case adsensehost#associationSession. | [optional] [default to 'adsensehost#associationSession']
**product_codes** | **List[str]** | The products to associate with the user. Options: AFC, AFG, AFV, AFS (deprecated), AFMC (deprecated) | [optional] 
**redirect_url** | **str** | Redirect URL of this association session. Used to redirect users into the AdSense association flow. | [optional] 
**status** | **str** | Status of the completed association, available once the association callback token has been verified. One of ACCEPTED, REJECTED, or ERROR. | [optional] 
**user_locale** | **str** | The preferred locale of the user themselves when going through the AdSense association flow. | [optional] 
**website_locale** | **str** | The locale of the user&#39;s hosted website. | [optional] 
**website_url** | **str** | The URL of the user&#39;s hosted website. | [optional] 

## Example

```python
from openapi_client.models.association_session import AssociationSession

# TODO update the JSON string below
json = "{}"
# create an instance of AssociationSession from a JSON string
association_session_instance = AssociationSession.from_json(json)
# print the JSON string representation of the object
print(AssociationSession.to_json())

# convert the object into a dict
association_session_dict = association_session_instance.to_dict()
# create an instance of AssociationSession from a dict
association_session_from_dict = AssociationSession.from_dict(association_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


