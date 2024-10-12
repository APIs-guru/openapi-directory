# License


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | If set to &#39;false&#39;, the License is disabled. License can be re-enabled, but as long as it is disabled, the License is excluded from the validation process. | [optional] 
**currency** | **str** | Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation. | [optional] 
**hidden** | **bool** | If set to &#39;true&#39;, this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly. | [optional] 
**name** | **str** | Name for the Licensed item. Set from License Template on creation, if not specified explicitly. | [optional] 
**number** | **str** | Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed. | [optional] 
**price** | **float** | &#39;price&#39; for the License. If &gt;0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation. | [optional] 

## Example

```python
from openapi_client.models.license import License

# TODO update the JSON string below
json = "{}"
# create an instance of License from a JSON string
license_instance = License.from_json(json)
# print the JSON string representation of the object
print(License.to_json())

# convert the object into a dict
license_dict = license_instance.to_dict()
# create an instance of License from a dict
license_from_dict = License.from_dict(license_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


