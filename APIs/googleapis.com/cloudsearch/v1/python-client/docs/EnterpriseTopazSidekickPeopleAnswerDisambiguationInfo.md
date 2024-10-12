# EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo

Metadata for disambiguation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disambiguation** | [**List[EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson]**](EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson.md) | A list of people that also matched the query. This list is not complete. | [optional] 
**name** | **str** | The name that was extracted from the query. This may be in the form of the given name, last name, full name, LDAP, or email address. This name can be considered suitable for displaying to the user and can largely be considered to be normalized (e.g. \&quot;Bob&#39;s\&quot; -&gt; \&quot;Bob\&quot;). | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_people_answer_disambiguation_info import EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo from a JSON string
enterprise_topaz_sidekick_people_answer_disambiguation_info_instance = EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_people_answer_disambiguation_info_dict = enterprise_topaz_sidekick_people_answer_disambiguation_info_instance.to_dict()
# create an instance of EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo from a dict
enterprise_topaz_sidekick_people_answer_disambiguation_info_from_dict = EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo.from_dict(enterprise_topaz_sidekick_people_answer_disambiguation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


