import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndPoint } from "./endpoint";



// RealtimeLogConfig
/** 
 * A real-time log configuration.
**/
export class RealtimeLogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata({ elemType: EndPoint })
  endPoints: EndPoint[];

  @SpeakeasyMetadata()
  fields: string[];

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  samplingRate: number;
}
