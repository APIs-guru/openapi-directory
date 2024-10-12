# RollbackFhirResourceFilteringFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata_filter** | **str** | Optional. A filter expression that matches data in the &#x60;Resource.meta&#x60; element. Supports all filters in [AIP-160](https://google.aip.dev/160) except the \&quot;has\&quot; (&#x60;:&#x60;) operator. Supports the following custom functions: * &#x60;tag(\&quot;\&quot;) &#x3D; \&quot;\&quot;&#x60; for tag filtering. * &#x60;extension_value_ts(\&quot;\&quot;) &#x3D; &#x60; for filtering extensions with a timestamp, where &#x60;&#x60; is a Unix timestamp. Supports the &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&lt;&#x3D;&#x60;, &#x60;&gt;&#x3D;&#x60;, and &#x60;!&#x3D;&#x60; comparison operators. | [optional] 
**operation_ids** | **List[str]** | Optional. A list of operation IDs to roll back. | [optional] 

## Example

```python
from openapi_client.models.rollback_fhir_resource_filtering_fields import RollbackFhirResourceFilteringFields

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackFhirResourceFilteringFields from a JSON string
rollback_fhir_resource_filtering_fields_instance = RollbackFhirResourceFilteringFields.from_json(json)
# print the JSON string representation of the object
print(RollbackFhirResourceFilteringFields.to_json())

# convert the object into a dict
rollback_fhir_resource_filtering_fields_dict = rollback_fhir_resource_filtering_fields_instance.to_dict()
# create an instance of RollbackFhirResourceFilteringFields from a dict
rollback_fhir_resource_filtering_fields_from_dict = RollbackFhirResourceFilteringFields.from_dict(rollback_fhir_resource_filtering_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


