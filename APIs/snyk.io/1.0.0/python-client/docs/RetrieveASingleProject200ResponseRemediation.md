# RetrieveASingleProject200ResponseRemediation

Remediation data (if available)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patch** | **object** | Recommended patches to apply to the project  (object)    paths (array) - List of paths to the vulnerable dependency that can be patched | [optional] 
**pin** | **object** | Recommended pins to apply to the project (Python only)  (object)     + upgradeTo (string, required) - &#x60;package@version&#x60; to upgrade to     + vulns (array[string], required) - List of vulnerability ids that will be fixed as part of this upgrade     + isTransitive (boolean) - Describes if the dependency to be pinned is a transitive dependency | [optional] 
**upgrade** | **object** | Recommended upgrades to apply to the project  (object)     + upgradeTo (string, required) - &#x60;package@version&#x60; to upgrade to     + upgrades (array[string], required) -  List of &#x60;package@version&#x60; that will be upgraded as part of this upgrade     + vulns (array[string], required) - List of vulnerability ids that will be fixed as part of this upgrade | [optional] 

## Example

```python
from openapi_client.models.retrieve_a_single_project200_response_remediation import RetrieveASingleProject200ResponseRemediation

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveASingleProject200ResponseRemediation from a JSON string
retrieve_a_single_project200_response_remediation_instance = RetrieveASingleProject200ResponseRemediation.from_json(json)
# print the JSON string representation of the object
print(RetrieveASingleProject200ResponseRemediation.to_json())

# convert the object into a dict
retrieve_a_single_project200_response_remediation_dict = retrieve_a_single_project200_response_remediation_instance.to_dict()
# create an instance of RetrieveASingleProject200ResponseRemediation from a dict
retrieve_a_single_project200_response_remediation_from_dict = RetrieveASingleProject200ResponseRemediation.from_dict(retrieve_a_single_project200_response_remediation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


