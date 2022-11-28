import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestGridSessionAction
/** 
 * An action taken by a <a>TestGridSession</a> browser instance.
**/
export class TestGridSessionAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=requestMethod" })
  requestMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=started" })
  started?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;
}
