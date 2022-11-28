import { SpeakeasyBase } from "../../../internal/utils";
import { AssetPropertyValue } from "./assetpropertyvalue";
/**
 * <p>Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.</p> <p>You must use expressions for all parameters in <code>IotSiteWiseAction</code>. The expressions accept literals, operators, functions, references, and substitutions templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>propertyAlias</code> parameter can be <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>assetId</code> parameter can be <code>$input.TurbineInput.assetId1</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>propertyAlias</code> parameter uses a substitution template. </p> <p> <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'</code> </p> </li> </ul> <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
**/
export declare class IotSiteWiseAction extends SpeakeasyBase {
    assetId?: string;
    entryId?: string;
    propertyAlias?: string;
    propertyId?: string;
    propertyValue?: AssetPropertyValue;
}
