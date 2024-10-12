# Contest

Information about a contest that appears on a voter's ballot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ballot_placement** | **str** | A number specifying the position of this contest on the voter&#39;s ballot. | [optional] 
**ballot_title** | **str** | The official title on the ballot for this contest, only where available. | [optional] 
**candidates** | [**List[Candidate]**](Candidate.md) | The candidate choices for this contest. | [optional] 
**district** | [**ElectoralDistrict**](ElectoralDistrict.md) |  | [optional] 
**electorate_specifications** | **str** | A description of any additional eligibility requirements for voting in this contest. | [optional] 
**level** | **List[str]** | The levels of government of the office for this contest. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at \&quot;locality\&quot; level, but also effectively at both \&quot;administrative-area-2\&quot; and \&quot;administrative-area-1\&quot;. | [optional] 
**number_elected** | **str** | The number of candidates that will be elected to office in this contest. | [optional] 
**number_voting_for** | **str** | The number of candidates that a voter may vote for in this contest. | [optional] 
**office** | **str** | The name of the office for this contest. | [optional] 
**primary_parties** | **List[str]** | If this is a partisan election, the name of the party/parties it is for. | [optional] 
**referendum_ballot_responses** | **List[str]** | The set of ballot responses for the referendum. A ballot response represents a line on the ballot. Common examples might include \&quot;yes\&quot; or \&quot;no\&quot; for referenda. This field is only populated for contests of type &#39;Referendum&#39;. | [optional] 
**referendum_brief** | **str** | Specifies a short summary of the referendum that is typically on the ballot below the title but above the text. This field is only populated for contests of type &#39;Referendum&#39;. | [optional] 
**referendum_con_statement** | **str** | A statement in opposition to the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type &#39;Referendum&#39;. | [optional] 
**referendum_effect_of_abstain** | **str** | Specifies what effect abstaining (not voting) on the proposition will have (i.e. whether abstaining is considered a vote against it). This field is only populated for contests of type &#39;Referendum&#39;. | [optional] 
**referendum_passage_threshold** | **str** | The threshold of votes that the referendum needs in order to pass, e.g. \&quot;two-thirds\&quot;. This field is only populated for contests of type &#39;Referendum&#39;. | [optional] 
**referendum_pro_statement** | **str** | A statement in favor of the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type &#39;Referendum&#39;. | [optional] 
**referendum_subtitle** | **str** | A brief description of the referendum. This field is only populated for contests of type &#39;Referendum&#39;. | [optional] 
**referendum_text** | **str** | The full text of the referendum. This field is only populated for contests of type &#39;Referendum&#39;. | [optional] 
**referendum_title** | **str** | The title of the referendum (e.g. &#39;Proposition 42&#39;). This field is only populated for contests of type &#39;Referendum&#39;. | [optional] 
**referendum_url** | **str** | A link to the referendum. This field is only populated for contests of type &#39;Referendum&#39;. | [optional] 
**roles** | **List[str]** | The roles which this office fulfills. | [optional] 
**sources** | [**List[Source]**](Source.md) | A list of sources for this contest. If multiple sources are listed, the data has been aggregated from those sources. | [optional] 
**special** | **str** | \&quot;Yes\&quot; or \&quot;No\&quot; depending on whether this a contest being held outside the normal election cycle. | [optional] 
**type** | **str** | The type of contest. Usually this will be &#39;General&#39;, &#39;Primary&#39;, or &#39;Run-off&#39; for contests with candidates. For referenda this will be &#39;Referendum&#39;. For Retention contests this will typically be &#39;Retention&#39;. | [optional] 

## Example

```python
from openapi_client.models.contest import Contest

# TODO update the JSON string below
json = "{}"
# create an instance of Contest from a JSON string
contest_instance = Contest.from_json(json)
# print the JSON string representation of the object
print(Contest.to_json())

# convert the object into a dict
contest_dict = contest_instance.to_dict()
# create an instance of Contest from a dict
contest_from_dict = Contest.from_dict(contest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


