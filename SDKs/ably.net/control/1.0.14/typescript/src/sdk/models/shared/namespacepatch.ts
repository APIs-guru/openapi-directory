import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NamespacePatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authenticated" })
  authenticated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=persistLast" })
  persistLast?: boolean;

  @SpeakeasyMetadata({ data: "json, name=persisted" })
  persisted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pushEnabled" })
  pushEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tlsOnly" })
  tlsOnly?: boolean;
}
