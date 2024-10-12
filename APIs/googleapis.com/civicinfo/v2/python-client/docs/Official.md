# Official

Information about a person holding an elected office.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**List[SimpleAddressType]**](SimpleAddressType.md) | Addresses at which to contact the official. | [optional] 
**channels** | [**List[Channel]**](Channel.md) | A list of known (social) media channels for this official. | [optional] 
**emails** | **List[str]** | The direct email addresses for the official. | [optional] 
**name** | **str** | The official&#39;s name. | [optional] 
**party** | **str** | The full name of the party the official belongs to. | [optional] 
**phones** | **List[str]** | The official&#39;s public contact phone numbers. | [optional] 
**photo_url** | **str** | A URL for a photo of the official. | [optional] 
**urls** | **List[str]** | The official&#39;s public website URLs. | [optional] 

## Example

```python
from openapi_client.models.official import Official

# TODO update the JSON string below
json = "{}"
# create an instance of Official from a JSON string
official_instance = Official.from_json(json)
# print the JSON string representation of the object
print(Official.to_json())

# convert the object into a dict
official_dict = official_instance.to_dict()
# create an instance of Official from a dict
official_from_dict = Official.from_dict(official_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


