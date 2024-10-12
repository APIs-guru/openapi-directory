# Licensee


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | If set to &#39;false&#39;, the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled. | [optional] 
**number** | **str** | Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee. | [optional] 

## Example

```python
from openapi_client.models.licensee import Licensee

# TODO update the JSON string below
json = "{}"
# create an instance of Licensee from a JSON string
licensee_instance = Licensee.from_json(json)
# print the JSON string representation of the object
print(Licensee.to_json())

# convert the object into a dict
licensee_dict = licensee_instance.to_dict()
# create an instance of Licensee from a dict
licensee_from_dict = Licensee.from_dict(licensee_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


