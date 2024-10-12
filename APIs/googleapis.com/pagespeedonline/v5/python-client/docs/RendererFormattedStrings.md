# RendererFormattedStrings

Message holding the formatted strings used in the renderer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_group_expand_tooltip** | **str** | The tooltip text on an expandable chevron icon. | [optional] 
**calculator_link** | **str** | Text link pointing to the Lighthouse scoring calculator. This link immediately follows a sentence stating the performance score is calculated from the perf metrics. | [optional] 
**crc_initial_navigation** | **str** | The label for the initial request in a critical request chain. | [optional] 
**crc_longest_duration_label** | **str** | The label for values shown in the summary of critical request chains. | [optional] 
**dropdown_copy_json** | **str** | Option in a dropdown menu that copies the Lighthouse JSON object to the system clipboard. | [optional] 
**dropdown_dark_theme** | **str** | Option in a dropdown menu that toggles the themeing of the report between Light(default) and Dark themes. | [optional] 
**dropdown_print_expanded** | **str** | Option in a dropdown menu that opens a full Lighthouse report in a print dialog. | [optional] 
**dropdown_print_summary** | **str** | Option in a dropdown menu that opens a small, summary report in a print dialog. | [optional] 
**dropdown_save_gist** | **str** | Option in a dropdown menu that saves the current report as a new GitHub Gist. | [optional] 
**dropdown_save_html** | **str** | Option in a dropdown menu that saves the Lighthouse report HTML locally to the system as a &#39;.html&#39; file. | [optional] 
**dropdown_save_json** | **str** | Option in a dropdown menu that saves the Lighthouse JSON object to the local system as a &#39;.json&#39; file. | [optional] 
**dropdown_viewer** | **str** | Option in a dropdown menu that opens the current report in the Lighthouse Viewer Application. | [optional] 
**error_label** | **str** | The label shown next to an audit or metric that has had an error. | [optional] 
**error_missing_audit_info** | **str** | The error string shown next to an erroring audit. | [optional] 
**footer_issue** | **str** | Label for button to create an issue against the Lighthouse GitHub project. | [optional] 
**lab_data_title** | **str** | The title of the lab data performance category. | [optional] 
**ls_performance_category_description** | **str** | The disclaimer shown under performance explaining that the network can vary. | [optional] 
**manual_audits_group_title** | **str** | The heading shown above a list of audits that were not computerd in the run. | [optional] 
**not_applicable_audits_group_title** | **str** | The heading shown above a list of audits that do not apply to a page. | [optional] 
**opportunity_resource_column_label** | **str** | The heading for the estimated page load savings opportunity of an audit. | [optional] 
**opportunity_savings_column_label** | **str** | The heading for the estimated page load savings of opportunity audits. | [optional] 
**passed_audits_group_title** | **str** | The heading that is shown above a list of audits that are passing. | [optional] 
**runtime_desktop_emulation** | **str** | Descriptive explanation for emulation setting when emulating a generic desktop form factor, as opposed to a mobile-device like form factor. | [optional] 
**runtime_mobile_emulation** | **str** | Descriptive explanation for emulation setting when emulating a Nexus 5X mobile device. | [optional] 
**runtime_no_emulation** | **str** | Descriptive explanation for emulation setting when no device emulation is set. | [optional] 
**runtime_settings_axe_version** | **str** | Label for a row in a table that shows the version of the Axe library used | [optional] 
**runtime_settings_benchmark** | **str** | Label for a row in a table that shows the estimated CPU power of the machine running Lighthouse. Example row values: 532, 1492, 783. | [optional] 
**runtime_settings_cpu_throttling** | **str** | Label for a row in a table that describes the CPU throttling conditions that were used during a Lighthouse run, if any. | [optional] 
**runtime_settings_channel** | **str** | Label for a row in a table that shows in what tool Lighthouse is being run (e.g. The lighthouse CLI, Chrome DevTools, Lightrider, WebPageTest, etc). | [optional] 
**runtime_settings_device** | **str** | Label for a row in a table that describes the kind of device that was emulated for the Lighthouse run. Example values for row elements: &#39;No Emulation&#39;, &#39;Emulated Desktop&#39;, etc. | [optional] 
**runtime_settings_fetch_time** | **str** | Label for a row in a table that shows the time at which a Lighthouse run was conducted; formatted as a timestamp, e.g. Jan 1, 1970 12:00 AM UTC. | [optional] 
**runtime_settings_network_throttling** | **str** | Label for a row in a table that describes the network throttling conditions that were used during a Lighthouse run, if any. | [optional] 
**runtime_settings_title** | **str** | Title of the Runtime settings table in a Lighthouse report. Runtime settings are the environment configurations that a specific report used at auditing time. | [optional] 
**runtime_settings_ua** | **str** | Label for a row in a table that shows the User Agent that was detected on the Host machine that ran Lighthouse. | [optional] 
**runtime_settings_ua_network** | **str** | Label for a row in a table that shows the User Agent that was used to send out all network requests during the Lighthouse run. | [optional] 
**runtime_settings_url** | **str** | Label for a row in a table that shows the URL that was audited during a Lighthouse run. | [optional] 
**runtime_unknown** | **str** | Descriptive explanation for a runtime setting that is set to an unknown value. | [optional] 
**scorescale_label** | **str** | The label that explains the score gauges scale (0-49, 50-89, 90-100). | [optional] 
**show_relevant_audits** | **str** | Label preceding a radio control for filtering the list of audits. The radio choices are various performance metrics (FCP, LCP, TBT), and if chosen, the audits in the report are hidden if they are not relevant to the selected metric. | [optional] 
**snippet_collapse_button_label** | **str** | The label for the button to show only a few lines of a snippet | [optional] 
**snippet_expand_button_label** | **str** | The label for the button to show all lines of a snippet | [optional] 
**third_party_resources_label** | **str** | This label is for a filter checkbox above a table of items | [optional] 
**throttling_provided** | **str** | Descriptive explanation for environment throttling that was provided by the runtime environment instead of provided by Lighthouse throttling. | [optional] 
**toplevel_warnings_message** | **str** | The label shown preceding important warnings that may have invalidated an entire report. | [optional] 
**variance_disclaimer** | **str** | The disclaimer shown below a performance metric value. | [optional] 
**view_treemap_label** | **str** | Label for a button that opens the Treemap App | [optional] 
**warning_audits_group_title** | **str** | The heading that is shown above a list of audits that have warnings | [optional] 
**warning_header** | **str** | The label shown above a bulleted list of warnings. | [optional] 

## Example

```python
from openapi_client.models.renderer_formatted_strings import RendererFormattedStrings

# TODO update the JSON string below
json = "{}"
# create an instance of RendererFormattedStrings from a JSON string
renderer_formatted_strings_instance = RendererFormattedStrings.from_json(json)
# print the JSON string representation of the object
print(RendererFormattedStrings.to_json())

# convert the object into a dict
renderer_formatted_strings_dict = renderer_formatted_strings_instance.to_dict()
# create an instance of RendererFormattedStrings from a dict
renderer_formatted_strings_from_dict = RendererFormattedStrings.from_dict(renderer_formatted_strings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


