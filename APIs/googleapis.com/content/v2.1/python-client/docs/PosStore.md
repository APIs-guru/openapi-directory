# PosStore

Store resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcid_category** | **List[str]** | The business type of the store. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#posStore&#x60;\&quot; | [optional] 
**matching_status** | **str** | Output only. The matching status of POS store and Google Business Profile store. Possible values are: - \&quot;&#x60;matched&#x60;\&quot;: The POS store is successfully matched with the Google Business Profile store. - \&quot;&#x60;failed&#x60;\&quot;: The POS store is not matched with the Google Business Profile store. See matching_status_hint for further details. Note that there is up to 48 hours propagation delay for changes in Merchant Center (e.g. creation of new account, accounts linking) and Google Business Profile (e.g. store address update) which may affect the matching status. In such cases, after a delay call [pos.list](https://developers.google.com/shopping-content/reference/rest/v2.1/pos/list) to retrieve the updated matching status.  | [optional] [readonly] 
**matching_status_hint** | **str** | Output only. The hint of why the matching has failed. This is only set when matching_status&#x3D;failed. Possible values are: - \&quot;&#x60;linked-store-not-found&#x60;\&quot;: There aren&#39;t any Google Business Profile stores available for matching. Connect your Merchant Center account with the Google Business Profile account. Or add a new Google Business Profile store corresponding to the POS store. - \&quot;&#x60;store-match-not-found&#x60;\&quot;: The provided POS store couldn&#39;t be matched to any of the connected Google Business Profile stores. Merchant Center account is connected correctly and stores are available on Google Business Profile, but POS store location address does not match with Google Business Profile stores&#39; addresses. Update POS store address or Google Business Profile store address to match correctly. - \&quot;&#x60;store-match-unverified&#x60;\&quot;: The provided POS store couldn&#39;t be matched to any of the connected Google Business Profile stores, as the matched Google Business Profile store is unverified. Go through the Google Business Profile verification process to match correctly.  | [optional] [readonly] 
**phone_number** | **str** | The store phone number. | [optional] 
**place_id** | **str** | The Google Place Id of the store location. | [optional] 
**store_address** | **str** | Required. The street address of the store. | [optional] 
**store_code** | **str** | Required. A store identifier that is unique for the given merchant. | [optional] 
**store_name** | **str** | The merchant or store name. | [optional] 
**website_url** | **str** | The website url for the store or merchant. | [optional] 

## Example

```python
from openapi_client.models.pos_store import PosStore

# TODO update the JSON string below
json = "{}"
# create an instance of PosStore from a JSON string
pos_store_instance = PosStore.from_json(json)
# print the JSON string representation of the object
print(PosStore.to_json())

# convert the object into a dict
pos_store_dict = pos_store_instance.to_dict()
# create an instance of PosStore from a dict
pos_store_from_dict = PosStore.from_dict(pos_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


